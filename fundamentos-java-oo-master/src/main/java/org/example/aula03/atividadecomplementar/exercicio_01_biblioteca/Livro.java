package org.example.aula03.atividadecomplementar.exercicio_01_biblioteca;

public class Livro extends Material {

    public Livro(String titulo, String autor, String anoPublicacao) {
        setTitulo(titulo);
        setAutor(autor);
        setAnoPublicacao(anoPublicacao);
    }

    @Override
    public void emprestar() {
        if (!isEmprestado()) {
            setEmprestado(true);
            System.out.println("O livro foi emprestado com sucesso!");
        } else {
            System.out.println("O livro já está empresado!");
        }
    }

    @Override
    public void devolver() {
        if (isEmprestado()) {
            setEmprestado(false);
            System.out.println("O livro foi devolvido com sucesso!");
        } else {
            System.out.println("O livro já foi devolvido!");
        }
    }
}
