package org.example.aula03.atividadecomplementar.exercicio_01_biblioteca;

public class DVD extends Material {

    public DVD(String titulo, String autor, String anoPublicacao) {
        setTitulo(titulo);
        setAutor(autor);
        setAnoPublicacao(anoPublicacao);
    }

    @Override
    public void emprestar() {
        if (!isEmprestado()) {
            setEmprestado(true);
            System.out.println("O DVD foi Emprestado com sucesso!");
        } else {
            System.out.println("O DVD já está empresado!");
        }
    }

    @Override
    public void devolver() {
        if (isEmprestado()) {
            setEmprestado(false);
            System.out.println("O DVD foi Devolvido com sucesso!");
        } else {
            System.out.println("O DVD já foi devolvido!");
        }
    }
}
