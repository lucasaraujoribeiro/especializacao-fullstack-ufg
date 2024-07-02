package org.example.aula01;

public class Aula01 {

    public static void main(String[] args) {
//        int idade1, idade2;
//        float media;
//
//        Scanner leitor = new Scanner(System.in);
//        System.out.println("Informe a primeira idade: ");
//        idade1 = leitor.nextInt();
//        System.out.println("Informe a segunda idade: ");
//        idade2 = leitor.nextInt();
//
//        media = (float) ((idade1 + idade2) / 2.0);
//
//        System.out.println("Media: " + media);

        Funcionario funcionario1 = new Funcionario("Carlos1");
        Funcionario funcionario2 = new Funcionario("Carlos2");
        System.out.println(funcionario1.getNome());

    }

}
