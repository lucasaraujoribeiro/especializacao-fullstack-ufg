package org.example.aula03.atividadecomplementar.exercicio_01_biblioteca;

public class Revista extends Material {

    public Revista(String titulo, String autor, String anoPublicacao) {
        setTitulo(titulo);
        setAutor(autor);
        setAnoPublicacao(anoPublicacao);
    }

    @Override
    public void emprestar() {
        if (!isEmprestado()) {
            setEmprestado(true);
            System.out.println("A revista foi emprestada com sucesso!");
        } else {
            System.out.println("A revista já está empresada!");
        }
    }

    @Override
    public void devolver() {
        if (isEmprestado()) {
            setEmprestado(false);
            System.out.println("A revista foi devolvida com sucesso!");
        } else {
            System.out.println("A revista já foi devolvida!");
        }
    }
}
