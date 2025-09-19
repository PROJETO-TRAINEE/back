import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { taskdto } from './task.dto';

@Injectable()
export class TaskService {

  constructor (private prisma: PrismaService){}

    async create(data: taskdto) {
    const task = await this.prisma.task.create ({
      data
    })
    return task;
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async update(id: number, data: taskdto) {
    const taskexists = await this.prisma.task.findUnique({
      where: {id}
    });
    if(!taskexists){
      throw new Error("Tarefa não encontrada");
    }
    return await this.prisma.task.update({
      data,
      where: {id}
    });
  }

  async delete(id: number) {
    const taskexists = await this.prisma.task.findUnique({
      where: {id}
    });
    if(!taskexists){
      throw new Error("Tarefa não encontrada");
    }
    return await this.prisma.task.delete({
      where: {id}
    });
  }

  async findOne(id: number) {
    const taskexists = await this.prisma.task.findUnique({
      where: {id}
    });
    if(!taskexists){
      throw new Error("Tarefa não encontrada");
    }
    return taskexists;
  }
}
