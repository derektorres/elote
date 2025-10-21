class Palindromo:
    def __init__(self, frase):
        self.frase = frase
    
    def is_palindromo(self) -> bool:
        p = self.frase
        #si p es es palindromo retorno true
        #si no retorna false
        if p == "palindromo":
            return True
        else:
            return False
        
        