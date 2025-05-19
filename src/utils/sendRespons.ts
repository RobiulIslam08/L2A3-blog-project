type TSuccessResponse<T> = {
  status?: boolean;
  statusCode: number;
  message: string;
  token?: string;
  data: T | T[] | null;
};
 const sendResopnse = <T>(res:Response, data:TSuccessResponse<T>) => {
	 res.status(data.statusCode).json({
		status:true,
	 })
 }

