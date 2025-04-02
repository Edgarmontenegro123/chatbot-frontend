const API_URL = "http://localhost:8080/api/chat";

export async function sendMessage(message: string): Promise<string> {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({message}),
        });
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        const data = await response.json();
        return data.reply;
    } catch (error) {
        console.error("Error al enviar mensaje: ", error);
        return "Error al conectar con el chatbot"
    }
}