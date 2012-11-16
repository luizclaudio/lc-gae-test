# coding: latin-1

from ProjetoDAO import ProjetoDAO
from Analise import Analise

class Projeto:

    def __init__(self, pNom = "", pEmp = ""):
        self.id = ""
        self.nome = pNom
        self.empresa = pEmp

    def salvar(self):
        ProjetoDAO().salvar(self)

    def carregar(self, pId):
        ProjetoDAO().carregar(self, pId)

    def excluir(self, pId = ""):        
        if pId != "":
            self.excluirAnalises(pId)
            ProjetoDAO().excluir(pId)
        elif self.id != "":
            self.excluirAnalises(self.id)
            ProjetoDAO().excluir(self.id)
            self.id = ""
            self.nome = ""
            self.empresa = ""

    def excluirAnalises(self, pId):
        anls = Analise().buscarPorProjeto(pId)
        if anls:
            for anl in anls:
                anl.excluir()

#---------- METODOS DE CLASSE ----------

    def buscarTodos(self, pOrd = ""):
        return ProjetoDAO().buscarTodos(pOrd)
