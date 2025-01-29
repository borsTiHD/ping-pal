package hosts

import (
	"math/rand"
	"time"
)

var hostItems []HostItem

func generateUniqueID() int {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	for {
		id := r.Intn(1000000) // Generate a random ID
		if !idExists(id) {
			return id
		}
	}
}

func idExists(id int) bool {
	for _, item := range hostItems {
		if item.Id == id {
			return true
		}
	}
	return false
}

func AddItem(item NewHost) {
	id := generateUniqueID()
	newItem := HostItem{
		Id:      id,
		Name:    item.Name,
		Address: item.Address,
	}
	hostItems = append(hostItems, newItem)
}

func GetItems() []HostItem {
	return hostItems
}

func DeleteItem(id int) bool {
	for i, item := range hostItems {
		if item.Id == id {
			hostItems = append(hostItems[:i], hostItems[i+1:]...)
			return true
		}
	}
	return false
}
