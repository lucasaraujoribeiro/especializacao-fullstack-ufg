package br.inf.ufg;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/calculadora")
public class CalculadoraServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		double n1 = Double.parseDouble(request.getParameter("n1"));
		double n2 = Double.parseDouble(request.getParameter("n2"));
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
		} catch (Exception e) {
			msgResposta = "Operação não realizada, mensagem: " + e.getMessage();
		}

		response.getWriter().print(msgResposta);
	}

}
