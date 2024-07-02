package org.example.aula03.atividadecomplementar.exercicio_01_biblioteca;

public class Main {

    public static void main(String[] args) {

        Livro livro = new Livro("Harry Potter e a pedra filosofal", "J.K. ROWLING", "1997");
        DVD dvd = new DVD("Star Wars: Episódio IV - Uma Nova Esperança", "George Lucas", "1977");
        Revista revista = new Revista("Forbes ", "Steve Forbes", "2024");

        System.out.println("\nEmprestando");
        livro.emprestar();
        dvd.emprestar();
        revista.emprestar();

        System.out.println("\nDevolvendo");
        livro.devolver();
        dvd.devolver();
        revista.devolver();

        System.out.println("\nTentar Devolver novamente, sem emprestar antes...");
        livro.devolver();
        dvd.devolver();
        revista.devolver();

    }

}
