import { Request, Response } from "express";
import * as _ from "lodash";
import pool from "../db";

class VideoController {
  public async getVideos(req: Request, res: Response) {
    const connection = await pool.getConnection();
    try {
      const [videos] = await connection.query("SELECT * FROM videos");
      res.json(videos);
    } finally {
      connection.release();
    }
  }

  public async getOneVideo(req: Request, res: Response) {
    const connection = await pool.getConnection();
    try {
      const [video] = await connection.query(
        `SELECT * FROM videos WHERE id = ?`,
        [req.params.id]
      );
      res.json(video);
    } finally {
      connection.release();
    }
  }

  public async createVideo(req: Request, res: Response) {
    const connection = await pool.getConnection();

    const newVideo = req.body;
    await connection.query("INSERT INTO videos SET ?", newVideo);
    res.json({ message: "Video saved" });
  }

  public async updateVideo(req: Request, res: Response) {
    const connection = await pool.getConnection();

    const updatedVideo = req.body;
    const id = req.params.id;
    await connection.query("UPDATE videos SET ? WHERE id = ?", [
      updatedVideo,
      id,
    ]);
    res.json({ message: "Video updated" });
  }

  public async deleteVideo(req: Request, res: Response) {
    const connection = await pool.getConnection();

    const id = req.params.id;
    await connection.query("DELETE FROM videos WHERE id = ?", [id]);
    res.json({ message: "Video deleted" });
  }
}

export default new VideoController();
