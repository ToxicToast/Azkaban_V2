import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'item-detail' })
export class ItemDetailTypeORMEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: false, nullable: false, type: 'varchar' })
  item_id: string;

  @Column({ unique: false, nullable: false, type: 'timestamp' })
  purchase_date: Date;

  @Column({ unique: false, nullable: true, default: null, type: 'timestamp' })
  expiration_date: Date | null;

  @Column({ unique: false, nullable: true, default: null, type: 'timestamp' })
  opening_date: Date | null;

  @Column({ unique: false, nullable: false, default: false, type: 'boolean' })
  returnable: boolean;

  @Column({ unique: false, nullable: false, default: false, type: 'boolean' })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ nullable: true, default: null, type: 'timestamp' })
  updated_at: Date | null;

  @DeleteDateColumn({ nullable: true, default: null, type: 'timestamp' })
  deleted_at: Date | null;
}
