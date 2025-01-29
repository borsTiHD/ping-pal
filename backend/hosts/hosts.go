package hosts

var hostItems []HostItem

func AddItem(item HostItem) {
	hostItems = append(hostItems, item)
}

func GetItems() []HostItem {
	return hostItems
}
