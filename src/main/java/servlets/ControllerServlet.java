package servlets;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("text/html");

        try {
            if (tryToParse(req.getParameter("Y")) &&
                    tryToParse(req.getParameter("R"))) {

                getServletContext().getRequestDispatcher("/areaCheckServlet").forward(req, resp);

            } else {
                    getServletContext().getRequestDispatcher("/mainPage.jsp").forward(req, resp);
            }

        } catch (Exception e) {
            PrintWriter writer = resp.getWriter();
            writer.write("An error occurs in Controller: " + e.toString());
            writer.close();
        }
    }



    private boolean tryToParse(String s) {
        try {
            Double.parseDouble(s);
            return true;
        } catch (NumberFormatException | NullPointerException ex) {
            return false;
        }
    }
}


