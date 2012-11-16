# coding: latin-1

from Conexao import Conexao
from Util import Util

class ProjetoDAO:

    def salvar(self, pObj):
        con = Conexao()
        cur = con.cursor
        nom = pObj.nome 
        emp = pObj.empresa
        if pObj.id == "":
            pObj.id = Util().gerarOid()
            stmt = "INSERT INTO projetos (id, nome, empresa) VALUES (?, ?, ?)"
            cur.execute(stmt, (pObj.id, nom, emp))
        else:
            stmt = "UPDATE projetos SET nome = ?, empresa = ?  WHERE id = ?"
            cur.execute(stmt, (nom, emp, pObj.id))
        con.commit()

    def carregar(self, pObj, pId):
        con = Conexao()
        cur = con.cursor
        stmt = "SELECT id, nome, empresa FROM projetos WHERE id = ?"
        cur.execute(stmt, (pId,))
        tup = cur.fetchone()
        if tup:
            pObj.id = tup[0]
            pObj.nome = tup[1]
            pObj.empresa = tup[2]
        else:
            pObj.id = ""
            pObj.nome = ""
            pObj.empresa = ""

#---------- METODOS DE CLASSE ----------

    def excluir(self, pId):
        con = Conexao()
        cur = con.cursor
        stmt = "DELETE FROM projetos WHERE id = ?"
        cur.execute(stmt, (pId,))
        con.commit()

    def buscarTodos(self, pOrd = ""):
        ret = []
        con = Conexao()
        cur = con.cursor
        stmt = "SELECT id, nome, empresa FROM projetos"
        if pOrd != "":
            stmt = stmt + " ORDER BY UPPER(" + pOrd + ")"
        cur.execute(stmt)
        import Projeto
        for tup in cur.fetchall():
            obj = Projeto.Projeto()
            obj.id = tup[0]
            obj.nome = tup[1]
            obj.empresa = tup[2]
            ret.append(obj)
        return ret
