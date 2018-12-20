package spark;

import static spark.Spark.*;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.util.*;

import org.eclipse.jetty.server.session.Session;

class Message {
  public String message_users;
  public String message;
}

public class Main {
  public static ArrayList<String> messages = new ArrayList<>();
  public static ArrayList<String> message_users = new ArrayList<>();

  public static String processRoute(Request req, Response res) {
    Set<String> params = req.queryParams();
    for (String param : params) {
      // possible for query param to be an array
      System.out.println(param + " : " + req.queryParamsValues(param)[0]);
    }
    // do stuff with a mapped version http://javadoc.io/doc/com.sparkjava/spark-core/2.8.0
    // http://sparkjava.com/documentation#query-maps
    // print the id query value
    System.out.println(req.queryMap().get("userid").value());
    return "done!";
  }

  public static void main(String[] args) {

    mongodbFunc mg = new mongodbFunc();

    messages.add("A sample message");
    message_users.add("System");
    Gson gson = new Gson();
    port(1234);
    webSocket("/ws", WebSocketHandler.class);
    // It needs this for development because our react server is on a different port!
    // calling get will make your app start listening for the GET path with the /hello endpoint
    get("/hello", (req, res) -> "Hello World");

    // showing a lambda expression with block body
    get("/test", (req, res) -> {
      // print some stuff about the request
      // http://sparkjava.com/documentation#routes
      System.out.println(req.attributes());
      System.out.println(req.headers());
      System.out.println(req.ip());
      System.out.println(req.url());
      System.out.println(req.userAgent());
      return "This one has a block body";
    });

    post("/api/login",(req,res) ->  {
      System.out.println("*****Login Session*****");
      String body = req.body();
      System.out.println(body);
      body = body.replaceAll("\""," ");
      body = body.replaceAll(","," ");
      body = body.replaceAll(":"," ");
      body = body.replaceAll("\\{}"," ");
      body = body.replaceAll("}"," ");
      String[] testtemp = body.split(" ");
//      for( int i = 0; i < testtemp.length; i++){
//        System.out.print("("+i+")"+testtemp[i]+" ");
//      }
      String Username = testtemp[4];
      String Password = testtemp[10];
      System.out.println("  Username: " + Username);
      System.out.println("  Password: " + Password);

      boolean login_check = mg.login_check(Username, Password);

      if(login_check == true){
        System.out.println("  Login Successful");
      }else{
        System.out.println("  Login Fail");
      }

      return "OK";
    });

    post("/api/register",(req,res) ->  {
      String body = req.body();
      System.out.println("*****Register Session*****");
      System.out.println(body);
      body = body.replaceAll("\""," ");
      body = body.replaceAll(","," ");
      body = body.replaceAll(":"," ");
      body = body.replaceAll("\\{}"," ");
      body = body.replaceAll("}"," ");
      String[] testtemp = body.split(" ");
      String Username = testtemp[4];
      String Password = testtemp[10];
      System.out.println("  Username: " + Username);
      System.out.println("  Password: " + Password);

      boolean register_check = mg.create_new_user(Username, Password);

      if(register_check == true){
        System.out.println("  Register Successful");
      }else{
        System.out.println("  Register Fail");
      }

      return "OK";
    });

    post("/api/sendmessage", (req, res) -> {
      System.out.println("*****Send Messages Session*****");
      String body = req.body();
      System.out.println("body:" + body);

      body = body.replaceAll("\""," ");
      body = body.replaceAll(","," ");
      body = body.replaceAll(":"," ");
      body = body.replaceAll("\\{}"," ");
      body = body.replaceAll("}"," ");
      String[] testtemp = body.split(" ");
      message_users.add(testtemp[4]);
      messages.add(testtemp[10]);
      //System.out.println("  Username: " + Username);
      //System.out.println("  Password: " + Password);

      //Message messageData = gson.fromJson(body, Message.class);
      //System.out.println("  messageData: " + messageData);
      //message_users.add(messageData.message_users);
      //messages.add(messageData.message);

      // Message type
      JsonObject broadcastMessage = new JsonObject();
      broadcastMessage.addProperty("type", "MESSAGE_BROADCAST");
      //broadcastMessage.addProperty("username", messageData.message_users);
      //broadcastMessage.addProperty("message", messageData.message);
      broadcastMessage.addProperty("username", testtemp[4]);
      broadcastMessage.addProperty("message", testtemp[10]);

      mg.add_messages(body);
      System.out.println("  "+broadcastMessage);

      /*
      {
      type: "MESSAGE_BROADCAST",
      message: data
      }
       */
      WebSocketHandler.broadcast(broadcastMessage.toString());
      return "OK";
    });

    // Slightly more advanced routing
    path("/api", () -> {
      get("/messages", (req, res) -> {
        System.out.println(gson.toJson(messages));
        return gson.toJson(messages);
      });
      get("/posts", Main::processRoute);
      get("/404test", (req, res) -> {
        // print some stuff about the request
        res.status(404);
        return "";
      });
    });
  }
}
