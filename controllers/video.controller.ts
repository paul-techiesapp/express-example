import { Request, Response } from "express";
import * as _ from "lodash";
import videoData from "../DATA/video";
import connection from "../lib/mysql";

class VideoController {
  public async getVideos(req: Request, res: Response): Promise<any> {
    const [results] = await connection.query("SELECT * FROM videos");
    res.json(results);
  }

  public async getVideo(req: Request, res: Response): Promise<any> {
    const [results] = await connection.query(
      "SELECT * FROM videos WHERE id = ?",
      [req.params.id]
    );
    res.json(results);
  }
}

export default new VideoController();
