package br.inf.ufg.backend;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CalculadoraServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String num1 = request.getParameter("n1");
		String num2 = request.getParameter("n2");
		
		double n1;
		double n2;
		try {
			n1 = Double.parseDouble(num1);
			n2 = Double.parseDouble(num2);
		} catch (NumberFormatException ex) {
			response.getWriter().print("Digite numeros validos!");
			return;
		}
		
		String operacao = request.getParameter("op");

		String msgResposta = "";
		try {
			double resultado = 0.0;
			switch (operacao) {
			case "adicao":
				resultado = n1 + n2;
				break;
			case "subtracao":
				resultado = n1 - n2;
				break;
			case "divisao":
				resultado = n1 / n2;
				break;
			case "multiplicacao":
				resultado = n1 * n2;
				break;
			default:
				throw new Exception("Operacao invalida!");
			}
			msgResposta = "Resultado: " + resultado;
		} catch (Exception ex) {
			msgResposta = "Falha: " + ex.getMessage();
		}

		response.getWriter().print(msgResposta);
	}

}
