package org.example.aula02.atividadepratica4.execercicio2;

public class Administrador extends Funcionario {

    private double salarioMensal;

    @Override
    public void mostrarDados() {
        super.mostrarDados();
        System.out.printf("Salario Mensal: R$ %.2f \n", salarioMensal);
    }

    public double getSalarioMensal() {
        return salarioMensal;
    }

    public void setSalarioMensal(double salarioMensal) {
        this.salarioMensal = salarioMensal;
    }
}
