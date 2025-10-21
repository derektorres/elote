class animal:
    def __init__(self, name, color):
        self.name = name
        self.color = color

    @classmethod
    def get_list(cls):
        animals = [
            cls("jirafa", "naranja"),
            cls("cebra", "blanca y negra"),
            cls("perico", "verde"),
            cls("huron", "cafe")
        ]
        return animals
