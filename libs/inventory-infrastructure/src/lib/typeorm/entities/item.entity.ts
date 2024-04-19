import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'item' })
export class ItemTypeORMEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: false, nullable: true, default: null, type: 'varchar' })
  category_id: string | null;

  @Column({ unique: false, nullable: true, default: null, type: 'varchar' })
  location_id: string | null;

  @Column({ unique: false, nullable: true, default: null, type: 'varchar' })
  company_id: string | null;

  @Column({ unique: false, nullable: true, default: null, type: 'varchar' })
  size_id: string | null;

  @Column({ unique: false, nullable: true, default: null, type: 'varchar' })
  type_id: string | null;

  @Column({ unique: false, nullable: true, default: null, type: 'varchar' })
  warehouse_id: string | null;

  @Column({ unique: true, nullable: false, type: 'varchar' })
  title: string;

  @Column({ unique: true, nullable: false, type: 'varchar' })
  slug: string;

  @Column({ unique: false, nullable: false, default: 0, type: 'int' })
  current_sku: number;

  @Column({ unique: false, nullable: false, default: 0, type: 'int' })
  min_sku: number;

  @Column({ unique: false, nullable: false, default: 0, type: 'int' })
  max_sku: number;

  @Column({ unique: false, nullable: true, default: null, type: 'varchar' })
  ean: string | null;

  @Column({ unique: false, nullable: true, default: null, type: 'float' })
  price: number | null;

  @Column({ unique: false, nullable: false, default: false, type: 'boolean' })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ nullable: true, default: null, type: 'timestamp' })
  updated_at: Date | null;

  @DeleteDateColumn({ nullable: true, default: null, type: 'timestamp' })
  deleted_at: Date | null;
}
