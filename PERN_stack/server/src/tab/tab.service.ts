import { Injectable, HttpException, ConflictException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './create-todo.dto';
import { Tab } from './tab.entity';

@Injectable()
export class TabService {
    constructor(
        @InjectRepository(Tab)
        private todosRepository: Repository<Tab>,
      ) { }
    
      //Gerer le filtrage des donnes pour le DTO
      async createEntity(createTodoDto: CreateTodoDto) {
            try {
            const newTodo = await this.todosRepository.create(createTodoDto);
            await this.todosRepository.save(newTodo);
            return newTodo;
            }
            catch (error){
                console.log(error)
                if (error.code === '23505')
                throw new ConflictException('Todo already exist')
            }
        }
      
      async updateEntity( id:string, createTodoDto: CreateTodoDto) {
            const ret = await this.todosRepository.findOne(id);
            if (!ret)
                throw new HttpException('This user does not exist', 404);
            await this.todosRepository.update(id, createTodoDto);
            return await this.todosRepository.findOne(id);
        }
      
      async findAll() {
        return this.todosRepository.find();
      }
    
      async findOne(id: string) {
        const ret = await this.todosRepository.findOne(id);
        if (!ret)
          throw new HttpException('This user does not exist', 404);
        return ret; 
      }
    
      async remove(id: string): Promise<void> {
        await this.todosRepository.delete(id);
      }

}
