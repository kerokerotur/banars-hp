export async function getPlayer(env: Env): Promise<any> {
  const query = "SELECT * FROM player";

  try {
    const result = await env.DB.prepare(query).all();
    return result.results;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw new Error("Failed to fetch players");
  }
}
