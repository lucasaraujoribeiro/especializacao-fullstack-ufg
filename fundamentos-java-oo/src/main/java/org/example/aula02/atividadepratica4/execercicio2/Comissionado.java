package org.example.aula02.atividadepratica4.execercicio2;

public class Comissionado extends Funcionario {

    private double salarioMensal;
    private double totalVendas;
    private double percentualComissao;

    @Override
    public void mostrarDados() {
        super.mostrarDados();
        System.out.printf("Salario Mensal: R$ %.2f \n", salarioMensal);
        System.out.printf("Total Vendas: R$ %.2f \n", totalVendas);
        System.out.printf("Percentual Comissao: %.2f%s \n", percentualComissao, "%");
        System.out.printf("Salario final: R$ %.2f \n", (salarioMensal + (totalVendas * (percentualComissao / 100))));
    }

    public double getSalarioMensal() {
        return salarioMensal;
    }

    public void setSalarioMensal(double salarioMensal) {
        this.salarioMensal = salarioMensal;
    }

    public double getTotalVendas() {
        return totalVendas;
    }

    public void setTotalVendas(double totalVendas) {
        this.totalVendas = totalVendas;
    }

    public double getPercentualComissao() {
        return percentualComissao;
    }

    public void setPercentualComissao(double percentualComissao) {
        this.percentualComissao = percentualComissao;
    }
}
