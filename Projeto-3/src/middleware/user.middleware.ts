import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'

export const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.header("Authorization") || "";
  const token = header.split(" ")[1];
  if(!token) return res.status(401).json({success: false, message: 'No token provided.'})

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    req.body.user = decoded.username;
    next()
  } catch (error) {
    res.status(403).json({
      success: false,
      message: 'Token not valid',
    });
  }
}