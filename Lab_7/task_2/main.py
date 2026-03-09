from models import Character, Warrior, Mage

def main():
    print("Инициализация персонажей")
    
    arthas = Warrior(name="Воин", health=150, damage=25, armor=50)
    jaina = Mage(name="Хруиоси", health=80, damage=10, mana=50)
    npc = Character(name="Житель", health=30, damage=5)

    print(arthas)
    print(jaina)
    print(npc)
    print("\nНачало боя")

    fighters = [arthas, jaina, npc]

 
    for fighter in fighters:
        print(fighter.attack())

    print("\nПрименение уникальных способностей")
    
    arthas.shield_block()
    
    jaina.take_damage(30)
    
    jaina.heal()

if __name__ == "__main__":
    main()