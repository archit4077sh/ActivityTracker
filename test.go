package main

import (
	"fmt"
	"net"
	"net/http"
	"net/url"
	"os"
)

func main() {
	// Define the proxy URL
	proxyURL, err := url.Parse("http://proxy.example.com:8080")
	if err != nil {
		fmt.Println("Error parsing proxy URL:", err)
		os.Exit(1)
	}

	// Connect to the proxy server
	proxyConn, err := net.Dial("tcp", proxyURL.Host)
	if err != nil {
		fmt.Println("Error connecting to proxy server:", err)
		os.Exit(1)
	}

	// Create an HTTP CONNECT request to establish a tunnel through the proxy
	req := &http.Request{
		Method: "CONNECT",
		Host:   "api.example.com:443",
		URL:    &url.URL{Host: "api.example.com:443"},
		Header: http.Header{
			"Proxy-Authorization": {http.ProxyConnectHeader("username", "password")},
		},
	}

	// Send the request through the proxy connection
	err = req.Write(proxyConn)
	if err != nil {
		fmt.Println("Error sending HTTP request:", err)
		os.Exit(1)
	}

	// Read the response from the proxy
	resp, err := http.ReadResponse(bufio.NewReader(proxyConn), req)
	if err != nil {
		fmt.Println("Error reading HTTP response:", err)
		os.Exit(1)
	}

	// Check if the CONNECT request was successful (HTTP status code 200)
	if resp.StatusCode != http.StatusOK {
		fmt.Println("Error establishing tunnel through proxy, response status code:", resp.StatusCode)
		os.Exit(1)
	}

	// Use the proxy connection to make the API call
	apiConn, err := tls.Dial("tcp", "api.example.com:443", nil)
	if err != nil {
		fmt.Println("Error connecting to API server:", err)
		os.Exit(1)
	}

	// Write the API request to the API connection
	apiConn.Write([]byte("GET /api/endpoint HTTP/1.1\r\nHost: api.example.com\r\n\r\n"))

	// Read the API response from the API connection
	apiResp := make([]byte, 1024)
	n, err := apiConn.Read(apiResp)
	if err != nil {
		fmt.Println("Error reading API response:", err)
		os.Exit(1)
	}

	// Print the API response to the console
	fmt.Println(string(apiResp[:n]))

	// Close the connections
	proxyConn.Close()
	apiConn.Close()
}
