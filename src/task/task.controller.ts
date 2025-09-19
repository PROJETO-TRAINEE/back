import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import type { taskdto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() data: taskdto) {
    return this.taskService.create(data);
  }
  @Get()
  async findAll() {
    return this.taskService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: taskdto) {
    return this.taskService.update(Number(id), data);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.taskService.delete(Number(id));
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.taskService.findOne(Number(id));
  }
}
