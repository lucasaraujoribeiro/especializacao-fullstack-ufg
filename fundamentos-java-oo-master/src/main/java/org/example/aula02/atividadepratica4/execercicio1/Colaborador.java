package org.example.aula02.atividadepratica4.execercicio1;

public class Colaborador extends Pessoa {

    private double salario;
    private Cargo cargo;

    @Override
    public void mostrarDados() {
        super.mostrarDados();
        System.out.println("SALARIO: " + salario);
        cargo.mostrarDados();
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public Cargo getCargo() {
        return cargo;
    }

    public void setCargo(Cargo cargo) {
        this.cargo = cargo;
    }

}
