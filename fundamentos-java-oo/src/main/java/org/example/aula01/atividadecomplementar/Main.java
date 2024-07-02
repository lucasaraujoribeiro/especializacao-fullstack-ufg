package org.example.aula01.atividadecomplementar;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        int qtdDisciplinas = 10;
        int qtdAlunos = 50;

        Scanner scan = new Scanner(System.in);

        List<Aluno> alunos = new ArrayList<>();
        List<Disciplina> disciplinas = new ArrayList<>();
        Curso curso = new Curso();

        System.out.print("Informe o nome do Curso: ");
        curso.setNome(scan.nextLine());
        System.out.print("Informe o turno do Curso: ");
        curso.setTurno(scan.nextLine());

        for (int i = 1; i <= qtdDisciplinas; i++) {
            Disciplina disciplina = new Disciplina();
            System.out.printf("Informe o nome da %d° disciplina: ", i);
            disciplina.setNome(scan.nextLine());
            disciplinas.add(disciplina);
        }


        for (int i = 1; i <= qtdAlunos; i++) {
            Aluno aluno = new Aluno();
            System.out.printf("Informe a matricula do %d° aluno: ", (i));
            aluno.setMatricula(scan.nextInt());
            System.out.printf("Informe o nome do %d° aluno: ", (i));
            aluno.setNome(scan.next());
            System.out.printf("Informe o telefone do %d° aluno: ", (i));
            aluno.setTelefone(scan.next());
            alunos.add(aluno);
        }


        System.out.print("\n===========================================");
        System.out.printf("\nCurso: %s ", curso.getNome());
        System.out.printf("\nTurno: %s ", curso.getTurno());
        System.out.printf("\nQuantidade de Disciplinas: %d", disciplinas.size());
        System.out.printf("\nQuantidade de Alunos: %d", alunos.size());
        System.out.print("\n===========================================");

    }

}
