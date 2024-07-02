package org.example.aula02.atividadepratica4.execercicio2;

public class Main {

    public static void main(String[] args) {

        Funcionario[] funcionarios = new Funcionario[6];

        Horista horista1 = new Horista();
        horista1.setNome("Horista1");
        horista1.setSobrenome("Sobrenome Horista 1");
        horista1.setQuantidadeDeHorasTrabalhadas(180);
        horista1.setValorHora(50);
        funcionarios[0] = horista1;

        Horista horista2 = new Horista();
        horista2.setNome("Horista2");
        horista2.setSobrenome("Sobrenome Horista 2");
        horista2.setQuantidadeDeHorasTrabalhadas(100);
        horista2.setValorHora(80);
        funcionarios[1] = horista2;

        Administrador admin1 = new Administrador();
        admin1.setNome("Admin1");
        admin1.setSobrenome("Sobrenome Admin1");
        admin1.setSalarioMensal(10000);
        funcionarios[2] = admin1;

        Administrador admin2 = new Administrador();
        admin2.setNome("Admin2");
        admin2.setSobrenome("Sobrenome Admin2");
        admin2.setSalarioMensal(15000);
        funcionarios[3] = admin2;

        Comissionado comissionado = new Comissionado();
        comissionado.setNome("Comissionado");
        comissionado.setSobrenome("Teste 3");
        comissionado.setSalarioMensal(5000);
        comissionado.setTotalVendas(100000);
        comissionado.setPercentualComissao(1.5);
        funcionarios[4] = comissionado;

        Gerente gerente = new Gerente();
        gerente.setNome("Gerente");
        gerente.setSobrenome("Sobrenome Gerente");
        gerente.setSalarioMensal(8000);
        gerente.setBonificacao(1000);
        funcionarios[5] = gerente;

        for (int i = 0; i < funcionarios.length; i++) {
            System.out.println("==================================================");
            funcionarios[i].mostrarDados();
        }

    }
}
