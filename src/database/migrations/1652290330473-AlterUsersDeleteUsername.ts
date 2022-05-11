import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUsersDeleteUsername1652290330473
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('Users', 'username');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'Users',
            new TableColumn({
                name: 'username',
                type: 'varchar',
            }),
        );
    }
}
