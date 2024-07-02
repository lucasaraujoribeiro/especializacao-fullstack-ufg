package org.example.aula03.atividadepratica5;

public abstract class Loja {

    private int identificador;
    private String CNPJ;
    private String razaoSocial;
    private boolean aberta;

    public Loja(String CNPJ, String razaoSocial, int identificador) {
        this.CNPJ = CNPJ;
        this.razaoSocial = razaoSocial;
        this.identificador = identificador;
        this.aberta = false;
    }

    public void mostrarDados() {
        System.out.printf("Identificador: %d\n", identificador);
        System.out.printf("Razao Social: %s\n", razaoSocial);
        System.out.printf("CNPJ: %s\n", CNPJ);
        System.out.printf("Aberta: %s \n", aberta ? "SIM" : "NAO");
    }

    public int getIdentificador() {
        return identificador;
    }

    public void setIdentificador(int identificador) {
        this.identificador = identificador;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public boolean isAberta() {
        return aberta;
    }

    public void setAberta(boolean aberta) {
        this.aberta = aberta;
    }
}
