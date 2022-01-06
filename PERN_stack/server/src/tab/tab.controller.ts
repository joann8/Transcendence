import { Controller, Post, Get, Delete, Param, Body} from '@nestjs/common';
import { TabService } from './tab.service';
import { CreateTodoDto } from './create-todo.dto'

@Controller('tab')
export class TabController {
    constructor(private readonly tabService : TabService) {}

    // Create a todo
    @Post()
    createtodo(@Body() createTodoDto : CreateTodoDto) {
        return this.tabService.createEntity(createTodoDto);
    }

    // get all todos
    @Get()
    getAll() {
        return this.tabService.findAll();
    }

    // get a todo
    @Get(':id') // SEARCH BY PSEUDO INSTEAD OF PK
    getOne(@Param() todoId : string) {
        return this.tabService.findOne(todoId);
    }

    //update a todo
    @Post(':id')
    updatetodo(@Param() todoId : string, @Body() createTodoDto : CreateTodoDto) {
        return this.tabService.updateEntity(todoId, createTodoDto);
    }
    //delete a todo
    @Delete(':id') // SAME
    removeOne(@Param() todoId : string ) {
        return this.tabService.remove(todoId);
    }
}
