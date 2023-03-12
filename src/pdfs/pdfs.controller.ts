import { Controller, Get, Body, Param, Res } from '@nestjs/common';
import { PdfsService } from './pdfs.service';


@Controller('pdfs')
export class PdfsController {
  constructor(private readonly pdfsService: PdfsService) { }

  @Get()
  async downloadPDF(@Res() res): Promise<void> {

    return this.pdfsService.getPdf();
  }
}

