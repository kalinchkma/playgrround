package human

import "log"

type Human struct {
	lifePoint int
}

func NewHuman() *Human {
	return &Human{lifePoint: 100}
}

func (h *Human) Display() {
	log.Print("life points: ", h.lifePoint)
}

func (h *Human) Damage(damagePoint int) {
	h.lifePoint -= damagePoint
}
