import { apiProvider } from "@/api";
import type { NodeConnection } from "@/types";
import axios from "axios";

class ConnectionApi {
  private readonly apiPath = "connection";

  getConnection(): Promise<NodeConnection> {
    return apiProvider.get(this.apiPath).then((res) => res.data);
  }

  async connectToNode(address: string): Promise<void> {
    await apiProvider.post(this.apiPath, { node_address: address });
  }

  async disconnectFromNode(): Promise<void> {
    await apiProvider.delete(this.apiPath);
  }

  async stopSessions(): Promise<void> {
    await apiProvider.delete(`${this.apiPath}/sessions`);
  }

  async resetConfiguration(): Promise<void> {
    await apiProvider.delete(`${this.apiPath}/configuration`);
  }

  async getCurrentIp(): Promise<string> {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  }
}

const connectionApi = new ConnectionApi();

export default connectionApi;
