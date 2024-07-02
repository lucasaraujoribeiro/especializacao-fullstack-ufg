package org.example.aula02.atividadepratica4.execercicio2;

public class Gerente extends Funcionario {

    private double salarioMensal;
    private double bonificacao;

    @Override
    public void mostrarDados() {
        super.mostrarDados();
        System.out.printf("Salario Mensal: R$ %.2f \n", salarioMensal);
        System.out.printf("Bonificacao: R$ %.2f \n", bonificacao);
        System.out.printf("Salario final: R$ %.2f \n", (salarioMensal + bonificacao));
    }

    public double getSalarioMensal() {
        return salarioMensal;
    }

    public void setSalarioMensal(double salarioMensal) {
        this.salarioMensal = salarioMensal;
    }

    public double getBonificacao() {
        return bonificacao;
    }

    public void setBonificacao(double bonificacao) {
        this.bonificacao = bonificacao;
    }
}
