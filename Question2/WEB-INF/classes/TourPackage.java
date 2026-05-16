import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class TourPackage extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        try {
            int p = Integer.parseInt(request.getParameter("people"));
            int cost = 10000;
            int total = p*cost;
            int discount = total * 10 / 100;
            total = total - discount;
            out.println("<h2>Total Cost: " + total + "</h2>");
            out.println("<h2> Discount : " + discount + "</h2>");
            out.println("<h2>@24071A05F4</h2>");

        } catch (NumberFormatException e) {
            out.println("<h3>Invalid input. Enter numbers only</h3>");
        }
    }
}