#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"

// DHT22 está definido
#define DHTPIN 4       // porta que está conectado no ESP32 
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "ssid";            // nome da rede WiFi
const char* password = "password";    // senha da rede WiFi

// Domain Name with full URL Path for HTTP POST Request
const char* serverName = "http://api.thingspeak.com/update";  // não alterar
// APIKey que está na thingspeak
String apiKey = "suaWriteAPIKey";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  dht.begin();

  Serial.println("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Conectado a rede WiFi com IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;
    delay(10000); // esperar por 10 segundos (intervalo de coleta)

    // Ler temperatura em Celsius (padrão)
    float temp = dht.readTemperature();  //Ler temperatura do sensor DHT22.
    float umid = dht.readHumidity();     //Ler umidade do sensor DHT22.

    if (isnan(umid) || isnan(temp)) {
      Serial.println(F("Erro de leitura DHT22!"));
      return;
    }

    // Your Domain name with URL path or IP address with path
    http.begin(client, serverName);

    // Specify content-type header
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");
    // Data to send with HTTP POST
    String httpRequestData = "api_key=" + apiKey + "&field1=" + String(temp) + "&field2=" + String(umid);
    
    // Send HTTP POST request
    int httpResponseCode = http.POST(httpRequestData);

    /*
    // If you need an HTTP request with a content type: application/json, use the following:
    http.addHeader("Content-Type", "application/json");
    // JSON data to send with HTTP POST
    String httpRequestData = "{\"api_key\":\"" + apiKey + "\",\"field1\":\"" + String(random(40)) + "\"}";
    // Send HTTP POST request
    int httpResponseCode = http.POST(httpRequestData);
    */

    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);

    http.end();
  } else {
    Serial.println("WiFi Disconnected");
  }
}