import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Tab {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string
}