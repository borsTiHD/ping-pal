package hosts

import "time"

type HostItem struct {
	Id        int       `json:"id"`
	Name      string    `json:"name"`
	Address   string    `json:"address"`
	CreatedAt time.Time `json:"created_at"`
}

type NewHost struct {
	Name    string `json:"name"`
	Address string `json:"address"`
}
