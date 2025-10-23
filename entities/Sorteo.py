import random
class Sorteo:
    def __init__(self,primero, segundo, tercero):
        
        self.primero = primero
        self.segundo = segundo
        self.tercero = tercero

    
    def Verquepedo (self) -> bool:

        SelectedNumberOne = self.primero
        SelectedNumberTwo = self.segundo
        SelectedNumberThree = self.tercero

        RandomWinner = random.randint(1-100)
        

        if (SelectedNumberOne or SelectedNumberTwo or SelectedNumberThree) == (RandomWinner):
            return True
        else: 
            return False





