class Character:
    
    def __init__(self, name: str, health: int, damage: int):
        self.name = name         
        self.health = health      
        self.damage = damage     

    def take_damage(self, amount: int):
        self.health -= amount
        if self.health < 0:
            self.health = 0
        print(f"{self.name} получает {amount} урона! Осталось {self.health} HP.")

    def attack(self):
        return f"{self.name} наносит базовый удар силой {self.damage}."

    def __str__(self):
        return f"[{self.__class__.__name__}] {self.name} (HP: {self.health}, DMG: {self.damage})"


class Warrior(Character):

    def __init__(self, name: str, health: int, damage: int, armor: int):
        super().__init__(name, health, damage)
        self.armor = armor

    def shield_block(self):
        print(f"{self.name} поднимает щит! Броня ({self.armor}) поглотит часть урона.")

    def attack(self):
        return f"{self.name} с размаху бьет мечом, нанося {self.damage} физического урона!"


class Mage(Character):

    def __init__(self, name: str, health: int, damage: int, mana: int):
        super().__init__(name, health, damage)
        self.mana = mana

    def heal(self):
        heal_amount = 20
        if self.mana >= 10:
            self.health += heal_amount
            self.mana -= 10
            print(f"{self.name} лечит себя на {heal_amount} HP! (Остаток маны: {self.mana})")
        else:
            print(f"{self.name} пытается лечиться, но не хватает маны!")

    def attack(self):
        if self.mana >= 5:
            self.mana -= 5
            return f"{self.name} кастует Огненный Шар на {self.damage + 15} урона! (-5 маны)"
        else:
            return f"{self.name} бьет посохом, нанося всего {self.damage} урона (нет маны)."

    def __str__(self):
        return super().__str__() + f", Mana: {self.mana}"