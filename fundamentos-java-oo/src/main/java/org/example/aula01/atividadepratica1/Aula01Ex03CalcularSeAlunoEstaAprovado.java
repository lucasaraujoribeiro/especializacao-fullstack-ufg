package org.example.aula01.atividadepratica1;

import java.util.Scanner;

public class Aula01Ex03CalcularSeAlunoEstaAprovado {

    public static void main(String[] args) {
        // 3 - Ler as notas finais de um aluno em três disciplinas, calcular a média global e, analisando-a, indicar se o aluno está aprovado (média global maior ou igual a 6.0) ou reprovado (caso contrário).

        int nota1, nota2, nota3;
        float media;

        Scanner scan = new Scanner(System.in);
        System.out.println("Informe a primeira nota: ");
        nota1 = scan.nextInt();
        System.out.println("Informe a segunda nota: ");
        nota2 = scan.nextInt();
        System.out.println("Informe a terceira nota: ");
        nota3 = scan.nextInt();

        media = (float) (nota1 + nota2 + nota3) / 3;

        if (media >= 6.0) {
            System.out.printf("Media: %f - APROVADO!", media);
        } else {
            System.out.printf("Media: %f - REPROVADO!", media);
        }
    }

}
