package main

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
)

func main() {
	proxyURL, err := url.Parse("http://89.46.249.248:25585")
	if err != nil {
		fmt.Println("Error parsing proxy URL:", err)
	}

	// custom transport
	transport := &http.Transport{
		Proxy: http.ProxyURL(proxyURL),
	}

	// client
	client := http.Client{
		Transport: transport,
	}
	fmt.Println("Client", client)
	req, err := http.NewRequest("GET", "https://free-proxy-list.net/", nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}

	// Send the request
	res, err := client.Do(req)
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}

	defer res.Body.Close()

	body, err := io.ReadAll(req.Body)
	if err != nil {
		fmt.Println("error reading response: ", err)
		return
	}

	fmt.Println("response:", string(body))

}
