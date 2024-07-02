package org.example.aula02.atividadepratica4.execercicio2;

public class Horista extends Funcionario {

    private int quantidadeDeHorasTrabalhadas;
    private double valorHora;

    @Override
    public void mostrarDados() {
        super.mostrarDados();
        System.out.printf("Quantidade de horas trabalhadas: %d \n", quantidadeDeHorasTrabalhadas);
        System.out.printf("Valor hora: R$ %.2f \n", valorHora);
        System.out.printf("Salario final: R$ %.2f \n", (valorHora * quantidadeDeHorasTrabalhadas));
    }

    public int getQuantidadeDeHorasTrabalhadas() {
        return quantidadeDeHorasTrabalhadas;
    }

    public void setQuantidadeDeHorasTrabalhadas(int quantidadeDeHorasTrabalhadas) {
        this.quantidadeDeHorasTrabalhadas = quantidadeDeHorasTrabalhadas;
    }

    public double getValorHora() {
        return valorHora;
    }

    public void setValorHora(double valorHora) {
        this.valorHora = valorHora;
    }
}
