import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});

