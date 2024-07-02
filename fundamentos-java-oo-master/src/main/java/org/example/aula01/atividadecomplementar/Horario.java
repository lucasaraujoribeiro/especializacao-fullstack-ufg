package org.example.aula01.atividadecomplementar;

public class Horario {

    private String diaSemana;
    private String horaInicio;
    private String horaFim;

    public void mostrarDados() {
        System.out.printf("\nDia Semana: %s", diaSemana);
        System.out.printf("\nHora inicio: %s", horaInicio);
        System.out.printf("\nHora fim: %s", horaFim);
    }

    public String getDiaSemana() {
        return diaSemana;
    }

    public void setDiaSemana(String diaSemana) {
        this.diaSemana = diaSemana;
    }

    public String getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(String horaInicio) {
        this.horaInicio = horaInicio;
    }

    public String getHoraFim() {
        return horaFim;
    }

    public void setHoraFim(String horaFim) {
        this.horaFim = horaFim;
    }
}
