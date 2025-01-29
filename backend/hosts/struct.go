package hosts

type HostItem struct {
	Id      int    `json:"id"`
	Name    string `json:"name"`
	Address string `json:"address"`
}

type NewHost struct {
	Name    string `json:"name"`
	Address string `json:"address"`
}
