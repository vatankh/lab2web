package model;

public class Point {
    public Double x;
    public Double y;
    public Double r;
    public boolean result;


    public void setX(Double x) {
        this.x = x;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public String getR() {
        return r.toString();
    }

    public String getX() {
        Double cordX = (x*90)/r+125;
        return cordX.toString();
    }

    public String getY() {
        Double cordY = ((-1)*y*90)/r+125;
        return cordY.toString();
    }
    public String getResult(){
        String res = "";
        if(result){
            res = "true";
        }else {
            res = "false";
        }
        return res;
    }

    @Override
    public String toString() {
         return "<tr>"+"<td>"+x.toString()+"</td>"+"<td>"+y.toString()+"</td>"+"<td>"+r.toString()+"</td>"+"<td>"+getResult()+"</td>"+"</tr>";
    }
}
